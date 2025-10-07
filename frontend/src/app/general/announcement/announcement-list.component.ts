/*
 * SPDX-FileCopyrightText: Copyright DB InfraGO AG and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AnnouncementWrapperService } from 'src/app/general/announcement/announcement.service';
import { AnnouncementComponent } from './announcement/announcement.component';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  imports: [AnnouncementComponent, NgClass],
})
export class AnnouncementListComponent {
  announcementWrapperService = inject(AnnouncementWrapperService);
}
