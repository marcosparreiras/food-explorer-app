import { useEffect, useState } from 'react';
import { useFavorites } from '../../hooks/favorites';
import { useAuth } from '../../hooks/auth';
import ROLES from '../../utils/roles';
import { Container, Main } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Slider from '../../components/Slider';
import { fetchWithErrorHandler } from '../../services/api';
import mealCategoriesDict from '../../utils/mealCategoriesDict';

/* eslint-disable */
function Home() {
    const [mealsPerCategory, setMealsPerCategory] = useState([]);
    const [search, setSearch] = useState('');
    const { user } = useAuth();

    let favorites = false;
    if (user.role === ROLES.CUSTOMER) {
        favorites = useFavorites().favorites;
    }

    function separateMealsPerCategory(data) {
        const categories = Array.from(new Set(data.map((el) => el.category)));
        const mealsPerCategory = [];
        categories.forEach((category) => {
            const meals = data.filter((el) => el.category === category);
            mealsPerCategory.push({
                category: mealCategoriesDict.labels[category],
                meals,
            });
        });
        mealsPerCategory.sort((a, b) => {
            return (
                mealCategoriesDict.sort[a.category] -
                mealCategoriesDict.sort[b.category]
            );
        });
        return mealsPerCategory;
    }

    useEffect(() => {
        async function fetchMeals() {
            const data = await fetchWithErrorHandler(
                'get',
                `/meals?search=${search}`
            );
            if (!data) {
                return;
            }
            setMealsPerCategory(separateMealsPerCategory(data));
        }
        fetchMeals();
    }, [search]);

    return (
        <Container>
            <Header search={search} setSearch={setSearch} />
            <Main>
                <Banner />
                {favorites && (
                    <details>
                        <summary>Favoritos</summary>
                        {favorites.length > 0 && <Slider slides={favorites} />}
                        {favorites.length <= 0 && (
                            <h5>Nenhum favorito adicionado</h5>
                        )}
                    </details>
                )}

                {mealsPerCategory &&
                    mealsPerCategory.map((mealObj) => (
                        <Slider
                            key={mealObj.category}
                            slides={mealObj.meals}
                            category={mealObj.category}
                        />
                    ))}
            </Main>
            <Footer />
        </Container>
    );
}

export default Home;
