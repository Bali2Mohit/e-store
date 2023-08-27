import { useSelector, useDispatch } from 'react-redux';
import './_side-nav.scss';
import AccordionSlice from '../../Redux/Accordion/accordionSlice';
import { useEffect } from 'react';
import {getCategories} from '../../Redux/Category/actions';

const SideNav = () => {

  const accordionData = useSelector(state=>state.categoryReducer.categories);
  console.log(accordionData);
  const dispatch = useDispatch();
  useEffect((()=>{
    dispatch(getCategories)
  }),[]);

  return (
      <div className="side-nav">
        <div className="section-title">
          <h3>Category</h3>
        </div>

        <div className="accordion">
          {
            accordionData.map((accordionCategory,key)=>{
              if (
                accordionCategory.parent_category_id === null &&
                accordionCategory.category !== 'All' && accordionCategory.category !== 'Best Offers')
               {
                return (
                  <div className="accordion-item individual-category">
                    <div className="accordion-header">
                      <button
                        className="accordion-button"
                        data-bs-target={"#collapse" + key}
                        data-bs-toggle="collapse"
                      >
                        <div className="category-title">
                          <a href="#">{accordionCategory.category}</a>
                        </div>
                      </button>
                    </div>
                    <div
                      className="accordion-collapse collapse show"
                      id={"collapse" + key}
                    >
                      <button className="accordion-body">
                        <ul>
                          {accordionData.map((subCategory) => {
                            if (
                              accordionCategory.id ===
                              subCategory.parent_category_id
                            ) {
                              return (
                                <li className="sub-items">
                                  <a href="#">{subCategory.category}</a>
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </button>
                    </div>
                  </div>
                );
              }
              
            })  
          }
          
        </div>
      </div>
    );
}

export default SideNav;