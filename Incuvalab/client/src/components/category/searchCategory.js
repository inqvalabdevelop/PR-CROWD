import { DropdownButton, Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import { useFunding } from '../../context/fundingContext'

export function SearchByCategory() {
    const { postsCat, getPostsFundByCat } = useFunding()

    return (
        <DropdownButton id="dropdown-item-button" title="Buscar por Categoría" size="md" className="d-grid gap-2 m-2" variant="dark">
            {postsCat.map(postCat => (
                <Link to="/catalogue/category" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                    <Dropdown.Item key={postCat.IdCategory} as="button" onClick={() => getPostsFundByCat(postCat.IdCategory)}>
                        {postCat.CategoryName}
                    </Dropdown.Item>
                </Link>
            ))}
        </DropdownButton>
    );
}