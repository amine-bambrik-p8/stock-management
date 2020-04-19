import { ProductEntry } from './product-entry.entity';
describe("ProductEntry schema",()=>{
    test("fields",()=>{
        const fields = ProductEntry.obj;
        const expectedFields: String[]= [
            "dateOfManufacturing",
            "dateOfExpiration",
            "checkedInQuantity",
            "boughtPrice",
            "price",
            "discount",
            "soldQuantity",
        ]
        const fieldsAsString = Object.keys(fields).sort().join(",");
        const expectedFieldsAsString = expectedFields.sort().join(",");
        expect(fieldsAsString).toBe(expectedFieldsAsString);
    });
    test("dateOfManufacturing", () => {
        const dateOfManufacturing = ProductEntry.obj.dateOfManufacturing;
            expect(dateOfManufacturing).toEqual({
                type: Date,
                
        });
    });
    test("dateOfExpiration", () => {
        const dateOfExpiration = ProductEntry.obj.dateOfExpiration;
            expect(dateOfExpiration).toEqual({
                type: Date,
                
        });
    });
    test("checkedInQuantity", () => {
        const checkedInQuantity = ProductEntry.obj.checkedInQuantity;
            expect(checkedInQuantity).toEqual({
                type: Number,
                
        });
    });
    test("boughtPrice", () => {
        const boughtPrice = ProductEntry.obj.boughtPrice;
            expect(boughtPrice).toEqual({
                type: Number,
                
        });
    });
    test("price", () => {
        const price = ProductEntry.obj.price;
            expect(price).toEqual({
                type: Number,
                
        });
    });
    test("discount", () => {
        const discount = ProductEntry.obj.discount;
            expect(discount).toEqual({
                type: Number,
                
        });
    });
    test("soldQuantity", () => {
        const soldQuantity = ProductEntry.obj.soldQuantity;
            expect(soldQuantity).toEqual({
                type: Number
                
        });
    });
    
});