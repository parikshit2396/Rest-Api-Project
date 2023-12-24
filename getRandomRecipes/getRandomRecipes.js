import { LightningElement ,track, api} from 'lwc';
import getrandomrecipes from '@salesforce/apex/spoonacularclass.getrandomrecipes';

export default class RecipesApplication extends LightningElement {
    @track userdata;
    @api id;
    @api image;
    @api title;
    @api pricePerServing;
    @api readyInMinutes;
    @api summary;
    @api recipeId;
    recipetemplate = false;
    recipebutton = 'Get Random Recipe Details';
    onclickhandler(event){
        const label = event.target.label;
        if(label == 'Get Random Recipe Details')
        {
            this.recipebutton = 'Hide Recipe Details';
            this.recipetemplate = true;
            getrandomrecipes()
            .then((result)=> {
            this.userdata = JSON.parse(JSON.stringify(result.recipes[0]));
            console.log('recipes is:'+this.recipes);
            this.title = this.userdata.title;
            this.image = this.userdata.image;
            this.pricePerServing = this.userdata.pricePerServing;
            this.readyInMinutes = this.userdata.readyInMinutes;
            this.summary = this.userdata.summary;
            

        })
        .catch((error) =>
        {
            console.log(error);
        })
        }
        else if(label == 'Hide Recipe Details')
        {
            this.recipebutton = 'Get Random Recipe Details';
            this.recipetemplate = false;
        }
        
    }

}
