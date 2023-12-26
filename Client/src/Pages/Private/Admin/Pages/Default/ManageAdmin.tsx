import { ListFarm, ListAccount } from "../Default/ListAdmin.tsx";
function ManageAdmin() {
    return (
        <div>
            <p className="border border-b-red-400">ManageAdmin</p>

            <div>
                <ListFarm/>
            </div>
            <br />
            <div className=" border border-stone-500">
                <ListAccount/>
            </div>
        </div>
    )
}

export {ManageAdmin};