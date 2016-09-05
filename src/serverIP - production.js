
var PORTFOLIO_SERVER_IP = "52.10.148.188";
var PORTFOLIO_SERVER_PORT = 3000;

(function() {

   var settings = {PORTFOLIO_SERVER_IP : PORTFOLIO_SERVER_IP, PORTFOLIO_SERVER_PORT : PORTFOLIO_SERVER_PORT}

   if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
      module.exports = settings;
   else {
      window.PortfolioControllerSettings = settings;
   }
})();
