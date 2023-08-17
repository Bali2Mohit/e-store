import './_cat-nav.scss';

const CatNav = () => {
    return (
      <div className="cat-nav-container container">
        <ul>
          <li className="list-item">
            <a href="#">Men</a>
          </li>
          <li className="list-item">
            <a href="#">Women</a>
          </li>
          <li className="list-item">
            <a href="#">Kids</a>
          </li>
          <li className="list-item">
            <a href="#">Best Offers</a>
          </li>
        </ul>
      </div>
    );
}

export default CatNav;