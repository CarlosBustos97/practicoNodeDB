function sequelizeErrorHandler (err, req, res, next) {
    if (err.parent) {
        const { fields, parent } = err;
        console.log('fields*******',fields);
        console.log('parent*******',parent);
        next();
      }
      
}
    
    

module.exports = sequelizeErrorHandler;
