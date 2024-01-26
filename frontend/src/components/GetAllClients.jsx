import axios from "axios";
import { useEffect, useState } from "react";
import ModalAddClient from './ModalAddClient';
import ModalOptimizedRoutes from './ModalOptimizedRoutes';

const GetAllUser = () => {
    const [users, setAllUser] = useState();
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModaOptimizedRouteslOpen, setModalOptimizedRoutesOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const openModalOptimizedRoutes = () => {
        setModalOptimizedRoutesOpen(true);
    };

    const closeModalOptimizedRoutes = () => {
        setModalOptimizedRoutesOpen(false);
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/clients")
            .then((response) => setAllUser(response.data))
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-12 w-full justify-center items-center">
                <h3 className="text-lg font-semibold my-4">Clientes</h3>
                <button onClick={openModal} type="button" className="flex justify-center items-center text-white border border-white hover:bg-gray-700 font-medium rounded-full text-sm w-9 h-9 text-center inline-flex items-center">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                    </svg>
                    <span className="sr-only">Adicionar Cliente</span>
                </button>
                <button onClick={openModalOptimizedRoutes} type="button" className="col-span-10 w-1/6 py-2 justify-self-end flex justify-center items-center rounded-md text-white border border-white hover:bg-gray-700 font-medium text-sm">
                    Rotas Otimizadas
                </button>
            </div>
            <ModalAddClient isOpen={isModalOpen} onClose={closeModal} />
            <ModalOptimizedRoutes isOpen={isModaOptimizedRouteslOpen} onClose={closeModalOptimizedRoutes} />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                    <thead className="text-xs uppercase bg-[#232529] text-gray-400 border-t-2 border-b-2 border-[#383a3e]">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nome
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Telefone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Coordenada X
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Coordenada Y
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user =>
                            <tr key={user.id} className="bg-[#232529] hover:bg-gray-10 hover:bg-gray-600 border border-[#383a3e] text-white">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    {user.name}
                                </th>
                                <td className="px-6 py-4">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4">
                                    {user.cellphone}
                                </td>
                                <td className="px-6 py-4">
                                    {user.coordinate_x}
                                </td>
                                <td className="px-6 py-4">
                                    {user.coordinate_y}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GetAllUser;
