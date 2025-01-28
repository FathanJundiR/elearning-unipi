const errorHandler = (error, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error";
  //hapus
  console.log(error);

  if (error.name == "SequelizeValidationError") {
    status = 400;
    message = error.errors.map((el) => el.message);
  }

  if (error.name == "SequelizeUniqueConstraintError") {
    status = 400;
    message = error.errors.map((el) => el.message);
  }

  if (
    error.name == "SequelizeDatabaseError" ||
    error.name == "SequelizeForeignKeyConstraintError"
  ) {
    status = 400;
    message = "Invalid input";
  }

  if (error.name == "InvalidLogin") {
    message = "Please input email or password";
    status = 400;
  }

  if (error.name == "LoginError") {
    message = "Invalid email or password";
    status = 401;
  }

  if (error.name == "Unauthorized" || error.name == "JsonWebTokenError") {
    message = "Please login first";
    status = 401;
  }

  if (error.name == "Forbidden") {
    message = "You dont have any access";
    status = 403;
  }

  if (error.name == "NotFound") {
    status = 404;

    if (error.id) {
      message = `Data with id ${error.id} not found`;
    } else {
      message = `Data not found`;
    }
  }

  res.status(status).json({
    message,
  });
};

module.exports = errorHandler;
