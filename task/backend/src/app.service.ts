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

  /** @return {Promise} */
  async getWorkouts() {
    /**
     * TODO 1: Retrieve workout completion data from the "workout_completions" table
     */
    const workouts = await this.database
      .createQueryRunner()
      .query('SELECT * FROM "workouts"');

    /**
     * TODO 2: Retrieve creators data
     * @example await this.httpService.get('http://api:3000/creators/{creatorId}').toPromise()
     */

    /**
     * TODO 3: Optimize.
     * This method takes 3 seconds to resolve. Make sure it's being run,
     * but the query does not have to wait for it to be resolved. (Task 1.3)
     */
    await this.doSomeAnalytics();

    return workouts;
  }

  /** @internal Function call that takes 3 seconds */
  private doSomeAnalytics = () => new Promise((r) => setTimeout(r, 3000));
}
