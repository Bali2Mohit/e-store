import './_cat-nav.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {getCategories} from '../../Redux/Category/actions'
import categorySlice from '../../Redux/Category/categorySlice';
import {Link} from "react-router-dom";

const CatNav = () => {

  const categories = useSelector(state=>state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories());
  },[])

    return (
      <div className="cat-nav-container container">
        <ul>
          <li className="list-item">
            <Link to="/"> Home </Link>
          </li>
          {
          categories.map((category) => {
            if (category.parent_category_id === null) {
              return (
                <li className="list-item" key={category.id}>
                  <a href="#">{category.category}</a>
                </li>
              );
            }
          })
        }
        </ul>
      </div>
    );
}

export default CatNav;