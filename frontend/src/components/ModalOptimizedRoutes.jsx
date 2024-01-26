
import axios from "axios";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ModalOptimizedRoutes = ({ isOpen, onClose }) => {
    const [users, setAllUser] = useState();
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/optimized-routes")
            .then((response) => setAllUser(response.data))
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return (
        <div id="add-client-modal" tabIndex="-1" aria-hidden="true" className={`modal fixed inset-0 ${isOpen ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm`}>
            <div className="relative p-4 w-full max-w-screen-xl max-h-full">
                <div className="relative rounded-lg shadow-xl bg-[#282831] border border-[#383a3e]">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Rotas Otimizadas
                        </h3>
                        <button onClick={onClose} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="add-client-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Fechar modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
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
                </div>
            </div>
        </div>
    );
};

export default ModalOptimizedRoutes;
