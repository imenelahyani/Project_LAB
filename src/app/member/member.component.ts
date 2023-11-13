import { Component } from '@angular/core';
import { GLOBAL1 } from 'src/app/app-config';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'createdDate'];

  dataSource: any[] = GLOBAL1._DB.members;
	
}
