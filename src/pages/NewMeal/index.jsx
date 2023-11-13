import { useState } from 'react';
import { BiUpload } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchWithErrorHandler } from '../../services/api';
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
import mealCategoriesDict from '../../utils/mealCategoriesDict';

function NewMeal() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('meal');
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const navigate = useNavigate();

    function handleFileChange(e) {
        const file = e.target.files[0];
        setImageFile(file);
    }

    function handleRemoveIngredient(ingredient) {
        setIngredients((prevState) =>
            prevState.filter((ing) => ing !== ingredient)
        );
    }

    function handleAddIngredient() {
        if (!newIngredient) {
            toast.error('Preencha o campo para adicionar um ingrediente');
            return;
        }
        setIngredients((prevState) => [...prevState, newIngredient]);
        setNewIngredient('');
    }

    async function handleAddMeal(e) {
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
        const data = await fetchWithErrorHandler('post', '/meals', {
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
                `/meals/${data.id}/image`,
                fileToUpdateForm
            );
        }

        toast.success(
            `${mealCategoriesDict.usToBr[category]} criada com sucesso`
        );
        navigate(`/meal/${data.id}`);
    }

    return (
        <Container>
            <Header />
            <Main>
                <BackButton to='/' />
                <h1>Adicionar Prato</h1>
                <Form onSubmit={handleAddMeal}>
                    <div className='flex'>
                        <FileInput
                            className='flex-1'
                            icon={BiUpload}
                            label='Imagem do prato'
                            id='file-img'
                            placeholder={
                                imageFile ? imageFile.name : 'Selecione imagem'
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
                            options={Object.keys(mealCategoriesDict.brToUs)}
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
                                        key={index * Math.random()}
                                        onClick={() =>
                                            handleRemoveIngredient(ing)
                                        }
                                    />
                                ))}
                            <CreateTag
                                edit
                                value={newIngredient}
                                onChange={(e) =>
                                    setNewIngredient(e.target.value)
                                }
                                onClick={handleAddIngredient}
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
                            onChange={(e) => setPrice(Number(e.target.value))}
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
                            title='Adicionar'
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

export default NewMeal;
