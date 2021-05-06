const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    proxy("/api/user", {
      target: "https://yasmin-portfollio.herokuapp.com",
      secure: false,
      changeOrgin: true,
    })
  );
};
