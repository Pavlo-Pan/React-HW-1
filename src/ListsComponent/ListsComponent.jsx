
const ListsComponent = () => {
    return (
        <div ><div>
            <h3>Упорядоченный список:</h3>
            <ol>
                <li>Элемент 1</li>
                <li>Элемент 2
                    <ul>
                        <li>Вложенный элемент 1</li>
                        <li>Вложенный элемент 2</li>
                    </ul>
                </li>
                <li>Элемент 3</li>
            </ol>

            <h3>Неупорядоченный список:</h3>
            <ul>
                <li>Элемент A</li>
                <li>Элемент B
                    <ol>
                        <li>Вложенный элемент X</li>
                        <li>Вложенный элемент Y</li>
                    </ol>
                </li>
                <li>Элемент C</li>
            </ul>
        </div>
        </div>

    )
}
export default ListsComponent