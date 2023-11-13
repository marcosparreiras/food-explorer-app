import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchWithErrorHandler } from '../../services/api';
import { BiUpload } from 'react-icons/bi';
import { Container, Main, Form } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import FileInput from '../../components/FileInput';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import TagsContainer from '../../components/TagsContainer';
import CreateTag from '../../components/CreateTag';
import { toast } from 'react-toastify';
import mealCategoriesDict from '../../utils/mealCategoriesDict';

/* eslint-disable */
function EditMeal() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('meal');
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');
    const [imageName, setImageName] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    function handleAddIngredient() {
        if (!newIngredient) {
            toast.error('Preencha o campo para adicionar um ingrediente');
            return;
        }
        setIngredients((prevState) => [...prevState, newIngredient]);
        setNewIngredient('');
    }

    function handleRemoveIngredient(ingredient) {
        setIngredients((prevState) =>
            prevState.filter((ing) => ing !== ingredient)
        );
    }

    function handleFileChange(e) {
        const file = e.target.files[0];
        console.log(file);
        setImageFile(file);
    }

    async function handleDeleteMeal() {
        if (!confirm('Confirme para excluir')) {
            return;
        }
        const data = await fetchWithErrorHandler(
            'delete',
            `/meals/${params.id}`
        );
        if (!data) {
            return;
        }
        toast.success(
            `${mealCategoriesDict.usToBr[category]} excluida com sucesso`
        );
        navigate('/');
    }

    async function handleEditMeal(e) {
        e.preventDefault();
        if (newIngredient) {
            toast.error('Confirme ou remova os ingredientes em aberto');
            return;
        }
        if (
            !name ||
            !description ||
            price <= 0 ||
            !price ||
            !category ||
            !ingredients
        ) {
            toast.error('Preencha corretamente todos os campos');
            return;
        }
        const data = await fetchWithErrorHandler('put', `/meals/${params.id}`, {
            name,
            description,
            price,
            category,
            ingredients,
        });
        if (!data) {
            return;
        }
        if (imageFile) {
            const fileToUpdateForm = new FormData();
            fileToUpdateForm.append('image', imageFile);
            await fetchWithErrorHandler(
                'patch',
                `/meals/${params.id}/image`,
                fileToUpdateForm
            );
        }
        toast.success(
            `${mealCategoriesDict.usToBr[category]} editada com sucesso`
        );
        navigate(`/meal/${params.id}`);
    }

    useEffect(() => {
        async function fetchMeal() {
            const data = await fetchWithErrorHandler(
                'get',
                `/meals/${params.id}`
            );
            if (!data) {
                navigate('/');
                return;
            }
            setName(data.name);
            setDescription(data.description);
            setPrice(data.price);
            setCategory(data.category);
            setIngredients(data.ingredients);
            setImageName(data.image?.split('-').slice(2).join('-'));
        }

        fetchMeal();
    }, []);

    return (
        <Container>
            <Header />
            <Main>
                <BackButton to='/' />
                <h1>Editar Prato</h1>
                <Form onSubmit={handleEditMeal}>
                    <div className='flex'>
                        <FileInput
                            className='flex-1'
                            icon={BiUpload}
                            label='Imagem do prato'
                            id='file-img'
                            placeholder={
                                imageFile
                                    ? imageFile.name
                                    : imageName
                                    ? imageName
                                    : 'Selecione imagem'
                            }
                            onChange={handleFileChange}
                        />

                        <Input
                            className='flex-2'
                            label='Nome'
                            id='name'
                            placeholder='Ex.: Salada Ceasar'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Select
                            className='flex-2'
                            label='Categoria'
                            id='category'
                            options={['Refeição', 'Sobremesa', 'Bebida']}
                            value={mealCategoriesDict.usToBr[category]}
                            onChange={(e) =>
                                setCategory(
                                    mealCategoriesDict.brToUs[e.target.value]
                                )
                            }
                        />
                    </div>
                    <div className='flex'>
                        <TagsContainer label='Ingredientes' className='flex-3'>
                            {ingredients &&
                                ingredients.map((ing, index) => (
                                    <CreateTag
                                        value={ing}
                                        key={String(index * Math.random())}
                                        onClick={() =>
                                            handleRemoveIngredient(ing)
                                        }
                                    />
                                ))}
                            <CreateTag
                                edit
                                value={newIngredient}
                                onClick={handleAddIngredient}
                                onChange={(e) =>
                                    setNewIngredient(e.target.value)
                                }
                            />
                        </TagsContainer>

                        <Input
                            className='flex-1'
                            label='Preço'
                            id='price'
                            placeholder='R$ 00,00'
                            type='number'
                            step='0.01'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <TextArea
                        id='description'
                        label='Descrição'
                        placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className='flex flex-end'>
                        <Button
                            title='Excluir prato'
                            type='button'
                            $bgcolor={theme.COLORS.DARK_800}
                            onClick={handleDeleteMeal}
                        />
                        <Button
                            title='Salvar alterações'
                            type='submit'
                            $bgcolor={theme.COLORS.TOMATO_400}
                        />
                    </div>
                </Form>
            </Main>
            <Footer />
        </Container>
    );
}

export default EditMeal;
