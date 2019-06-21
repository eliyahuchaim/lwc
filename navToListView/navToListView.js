import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavToListView extends NavigationMixin(LightningElement) {

    handleOnClick () {
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes :{
                objectApiName : 'Contact',
                actionName : 'list' 
            },
            state : {
                filterName : 'recent'
            }
        });
    }
}