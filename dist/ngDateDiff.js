(function(angular) {
    const app = angular.module("ngDateDiff", []);
    app.service('ngDateDiff', function () {
        this.Diff = function (date1,date2) {
            var d1,d2;

            [d1,d2] = [date1,date2];
            
            if(typeof date1 !== "object"){
              d1 = new Date(date1);
            }
            
            if(typeof date2 !== "object"){
              d2 = new Date(date2);
            }
            
            var ms = d1 - d2;
            
              var d, h, m, s;
              s = Math.floor(ms / 1000);
              m = Math.floor(s / 60);
              s = s % 60;
              h = Math.floor(m / 60);
              m = m % 60;
              d = Math.floor(h / 24)-365;
              y = Math.floor( Math.floor(h / 24)/365 );
              h = h % 24;
          
            var Sums = Math.floor(ms / 1000);
            var Summ = Math.floor(Sums / 60);
            var Sumh = Math.floor(Summ / 60);
            var Sumd = Math.floor(Sumh / 24);
            var Sumy = Math.floor(Sumd / 365);
              
              return [{
              years : y,
              days : d,
              hours : h,
              minutes : m,
              seconds : s,
                sum : {
                    Seconds : Sums ,
                    minutes : Summ ,
                    hours :Sumh ,
                    days :Sumd ,
                    years :Sumy 
                }
              }][0]

        }
    })
})(window.angular);