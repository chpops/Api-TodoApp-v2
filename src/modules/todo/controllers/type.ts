import { ApiProperty } from '@nestjs/swagger';

export class NotFoundResponse {
  @ApiProperty({
    default: 404
  })
    statusCode: number;
    
  @ApiProperty({
    default: 'ToDo Task with id=% not exists',
  })
    message: string;
}
