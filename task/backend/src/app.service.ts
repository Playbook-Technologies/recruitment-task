import { Injectable } from "@nestjs/common";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

@Injectable()
export class AppService {
  constructor(@InjectDataSource() private readonly database: DataSource) {}

  async getWorkouts() {
    const queryBuilder = this.database.createQueryBuilder();

    return queryBuilder.from("workouts", "workout").execute();
  }
}
