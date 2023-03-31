import ButtonLogout from "../logout";

export default function Menu() {
    return (
        <>
        <div className="dropdown-menu dropdown-left" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/userProfile">Mis registros</a>
            <a className="dropdown-item" href="/settings">Mi Perfil</a>
            <ButtonLogout />
        </div>
        </>
    )
}