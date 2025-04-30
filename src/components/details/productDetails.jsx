const ProductDetails = ({ title, store }) => {
    return (
      <div className="text-left">
        <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
          {title}
        </a>
        <div>
          <span className="opacity-50">
            {store}
          </span>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;
  