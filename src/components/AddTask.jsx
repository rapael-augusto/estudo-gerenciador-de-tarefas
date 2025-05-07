import { useState } from "react";
import Input from "./Input"

function AddTask({onAddTaskSubmit}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 bg-slate-200 rounded-md shadow p-6 flex flex-col">
            <Input 
                type="text" placeholder="Digite o título da tarefa"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input 
                type="text" placeholder="Digite a descrição da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
                onClick={() => {
                    if(!title || !description){
                        return alert("Preencha todos os campos!");
                    }
                    onAddTaskSubmit(title, description);
                    setTitle("");
                    setDescription("");
                }}
            >Adicionar</button>
        </div>
    );
}

export default AddTask;