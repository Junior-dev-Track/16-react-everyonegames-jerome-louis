/* eslint-disable react/prop-types */
const Category = ({category}) => {
    return (
        <li>
            <div className="infos">
                <h2>{category.name}</h2>
            </div>
        </li>
    );
};

export default Category;