public class spoonacularclass {
   	public static final string spoonacular_api = 'https://api.spoonacular.com';
    public static final string api_key = 'Put Your API Key here';
    
    @Auraenabled
    public static result getrandomrecipes(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(spoonacular_api+'/recipes/random?apiKey='+api_key);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        if(response.getStatusCode() == 200){
            system.debug(response.getbody());
        }
        
        Result getdata = new Result();
        getdata = (Result)System.JSON.deserialize(response.getbody(),Result.class);
        system.debug('Result data is:'+getdata);
        return getdata;
    }
        public class Result{
             @Auraenabled public List<Recipes> recipes;
        }
        
        public class Recipes{
            @Auraenabled public integer id;
            @Auraenabled public string title;
            @Auraenabled public integer readyInMinutes;
            @Auraenabled public string image;
            @Auraenabled public string summary;
           // @Auraenabled public List<string> dishTypes;
            @Auraenabled public double pricePerServing;
        }
        
    }
