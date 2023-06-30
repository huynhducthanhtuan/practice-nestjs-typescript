import axios from 'axios';
import { SEARCH_HISTORY_API } from 'src/constants';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ScheduleService {
  private readonly logger = new Logger(ScheduleService.name);

  async fetchData() {
    // Fetch data from the external API
    const fetchData = await axios.get(SEARCH_HISTORY_API);
    this.logger.log('Data fetching complete!', fetchData.data);
  }
}
