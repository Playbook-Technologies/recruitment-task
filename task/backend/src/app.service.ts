import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(@InjectDataSource() private readonly database: DataSource, private readonly httpService: HttpService) {}

  /**
   * @return {Promise}
   */
  async getWorkouts() {
    const queryBuilder = this.database.createQueryBuilder();

    /**
     * TODO: Optimize.
     * This method takes 3 seconds to resolve. Make sure it's being run,
     * but the query does not have to wait for it to be resolved.
     */
    await this.trackQuery();

    /** TODO: Retrieve completion data */
    const workouts = queryBuilder.from("workouts", "workout").execute();

    /**
     * TODO: Retrieve creators data
     * @example http://api:3000/{creatorId}
     */
    return workouts;
  }

  /**
   * @return {Promise<Observable<AxiosResponse>>}
   * @private
   */
  private async trackQuery() {
    /** @internal Nevermind what it does, just make sure it's being called */
    return this.httpService.get('http://api:3000/track-query').toPromise()
  }
}
