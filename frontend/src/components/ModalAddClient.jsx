
import axios from "axios";
import { useState } from "react";
import InputMask from 'react-input-mask';

// eslint-disable-next-line react/prop-types
const ModalAddClient = ({ isOpen, onClose }) => {
    const [user, setUser] = useState({
        name: '',
        cellphone: '',
        email: '',
        coordinate_x: '',
        coordinate_y: ''
    })

    const createUser = async () => {        
        await axios
            .post("http://localhost:8000/api/clients",
                user,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            .then((response) => {
                setUser({
                    name: '',
                    cellphone: '',
                    email: '',
                    coordinate_x: '',
                    coordinate_y: ''
                })
                return alert("Criado com sucesso: " + `${JSON.stringify(response.data, null, 4)}`);
            })
            .catch((err) => {
                event.preventDefault();
                return alert(err);
            });
    }

    const onChangeForm = (e) => {
        if (e.target.name === 'name') {
            setUser({ ...user, name: e.target.value });
        } else if (e.target.name === 'cellphone') {
            setUser({ ...user, cellphone: e.target.value });
        } else if (e.target.name === 'email') {
            setUser({ ...user, email: e.target.value });
        } else if (e.target.name === 'coordinate_x') {
            setUser({ ...user, coordinate_x: e.target.value });
        } else if (e.target.name === 'coordinate_y') {
            setUser({ ...user, coordinate_y: e.target.value });
        }
    }
    return (
        <div id="add-client-modal" tabIndex="-1" aria-hidden="true" className={`modal fixed inset-0 ${isOpen ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative rounded-lg shadow-xl bg-[#282831] border border-[#383a3e]">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Cadastrar Cliente
                        </h3>
                        <button onClick={onClose} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="add-client-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Fechar modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                                <input
                                    type="text"
                                    value={user.name}
                                    onChange={(e) => onChangeForm(e)}
                                    name="name"
                                    id="name"
                                    placeholder="Nome do Cliente"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    value={user.email}
                                    onChange={(e) => onChangeForm(e)}
                                    name="email"
                                    id="email"
                                    placeholder="name@company.com"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="cellphone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefone</label>
                                <InputMask
                                    type="text"
                                    value={user.cellphone}
                                    onChange={(e) => onChangeForm(e)}
                                    name="cellphone"
                                    id="cellphone"
                                    mask="(99) 9999-9999"
                                    placeholder="(00) 9999-9999"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div className="flex flex-row">
                                <div className="mr-4">
                                    <label htmlFor="coordinate_x" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coordenada X</label>
                                    <input
                                        type="number"
                                        value={user.coordinate_x}
                                        onChange={(e) => onChangeForm(e)}
                                        name="coordinate_x"
                                        id="coordinate_x"
                                        placeholder="0000"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="coordinate_y" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coordenada Y</label>
                                    <input
                                        type="number"
                                        value={user.coordinate_y}
                                        onChange={(e) => onChangeForm(e)}
                                        name="coordinate_y"
                                        id="coordinate_y"
                                        placeholder="0000"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => createUser()}
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Salvar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAddClient;
