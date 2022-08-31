import { AppDataSource } from "./data-source"
import { Appeal } from "./entity/Appeal"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new Appeals into the database...")
    const appeal = new Appeal()
    appeal.appealNumber = 112312;
    appeal.appeal_type='AISH';
    appeal.id = 4;
    await AppDataSource.manager.save(appeal)
    console.log("Saved a new appeal with id: " + appeal.id)

    console.log("Loading appeals from the database...")
    const appeals = await AppDataSource.manager.find(Appeal)
    console.log("Loaded appeals: ", appeals)

   

}).catch(error => console.log(error))
