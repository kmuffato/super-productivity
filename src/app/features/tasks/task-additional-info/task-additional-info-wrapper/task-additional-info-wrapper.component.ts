import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TaskService} from '../../task.service';
import {LayoutService} from '../../../../core-ui/layout/layout.service';
import {delay, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'task-additional-info-wrapper',
  templateUrl: './task-additional-info-wrapper.component.html',
  styleUrls: ['./task-additional-info-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskAdditionalInfoWrapperComponent {
  // NOTE: used for debugging
  @Input() isAlwaysOver = false;

  // to still display its data when panel is closing
  selectedTaskWithDelayForNone$ = this.taskService.selectedTask$.pipe(
    switchMap((task) => task
      ? of(task)
      : of(null).pipe(delay(200))
    )
  );

  constructor(
    public taskService: TaskService,
    public layoutService: LayoutService,
  ) {
  }
}
