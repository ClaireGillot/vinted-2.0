

const isAuthenticated = async (req, res, next) => {
 //Si je recois un token existant..
  req.headers.authorization ? (
      //alors le stock.
   token = req.headers.authorization.replace("Bearer", ""
   ) : (
       //Sinon..
       return 
       <Redirect to="/signup"/>
  }
};

export default isAuthenticated;
