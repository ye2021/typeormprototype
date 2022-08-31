import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from "typeorm";
import { AppDataSource } from "../data-source";
import { Appeal } from "../entity/Appeal";
import { AppealHistory } from "../entity/AppealHistory";

@EventSubscriber()
export class AppealSubscriber implements EntitySubscriberInterface<Appeal> {
  listenTo() {
    return Appeal;
  }

  afterLoad(entity: Appeal) {
    console.log(`AFTER Appeal LOADED: `, entity);
  }

  async beforeInsert(event: InsertEvent<Appeal>) {}

  beforeUpdate(event: UpdateEvent<any>) {
    console.log(`BEFORE ENTITY UPDATED: `, event.entity);
  }

  async afterUpdate(event: UpdateEvent<Appeal>) {
    const appealRepo = AppDataSource.getRepository(Appeal);
    const oldAppeal = await appealRepo.findOneBy({ id: event.entity.id });
    console.log("Old Appeal>>>", oldAppeal);

    const appealHistory = new AppealHistory();
    appealHistory.appealNumber = oldAppeal.appealNumber;
    appealHistory.appeal_type = oldAppeal.appeal_type;
    AppDataSource.getRepository(AppealHistory).save(appealHistory);
    console.log(`AFTER ENTITY UPDATED: `, event.entity);
  }
}
