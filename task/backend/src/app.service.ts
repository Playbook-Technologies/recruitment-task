import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class AppService {
  constructor(
    @InjectDataSource() private readonly database: DataSource,
    private readonly httpService: HttpService,
  ) {}

  /**
   * @return {Promise}
   */
  async getWorkouts() {
    /**
     * TODO: Retrieve workout completion data from "workout_completions"
     * Optionally use raw sql if you're not familiar with QueryBuilder's API.
     */
    const workouts = this.database
      .createQueryBuilder()
      .from("workouts", "workout")
      .execute();
    // const workouts = await this.database.createQueryRunner.query('SELECT * FROM "workouts"')

    /**
     * TODO: Optimize.
     * This method takes 3 seconds to resolve. Make sure it's being run,
     * but the query does not have to wait for it to be resolved. (Task 1.3)
     */
    await this.trackQuery();

    /**
     * TODO: Retrieve creators data
     * @example http://api:3000/{creatorId}
     */
    return workouts;
  }

  /** @private Nevermind what it does, just make sure it's being called. (Details in Readme: Task 1.3) */
  private async trackQuery() {
    return this.httpService.get("http://api:3000/track-query").toPromise();
  }
}
