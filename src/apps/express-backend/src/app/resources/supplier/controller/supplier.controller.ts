import { Supplier } from '../model/supplier.model';
import { CRUDController } from '../../../utils/crud.controller';
export class SupplierController extends CRUDController{
    constructor(){
        super(Supplier);
    }
}