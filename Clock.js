/**
 * Created by user on 2016-06-27.
 */
function Clock(){
    var date = new Date();
    this.second = date.getSeconds();
    this.minute = date.getMinutes();
    this.hour = date.getHours();


    this.work = function(){
        if(this.second<59){
            this.second+=1;
        }else{
            this.second = 0;
            if(this.minute<59){
                this.minute +=1;
            }else{
                this.minute = 0;
                if(this.hour<23){
                    this.hour +=1;
                }else{
                    this.hour = 0;
                    this.minute = 0;
                    this.second = 0;
                }
            }
        }

    }
}
