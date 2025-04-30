const ProductImage = ({ src, alt }) => {
    return (
      <div className="h-40 w-full">
        <a href="#">
          <img src={src} className="object-cover w-65 h-full" alt={alt} />
        </a>
      </div>
    );
  };
  
  export default ProductImage;
  