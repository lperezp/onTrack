import { TestBed } from '@angular/core/testing';

import { TaskSQLiteService } from './task-sqlite.service';

describe('TaskSQLiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskSQLiteService = TestBed.get(TaskSQLiteService);
    expect(service).toBeTruthy();
  });
});
