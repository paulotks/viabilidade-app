import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from '@components/layout/layout.component';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-new-project',
  imports: [LayoutComponent,CommonModule, MatIcon, MatIconModule, MatButtonModule ],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.scss'
})
export class NewProjectComponent {
  constructor() {}

  protected isDragOver = signal<boolean>(false);
  protected fileName = signal<string | null>(null);

  protected onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver.set(true);
  }

  protected onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver.set(false);
  }

  protected onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver.set(false);

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.processFile(files[0]);
    }
  }

  protected onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.processFile(input.files[0]);
    }
  }

  protected processFile(file: File) {
    const validTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ];

    const extensionValid = file.name.endsWith('.xls') || file.name.endsWith('.xlsx');
    const mimeValid = validTypes.includes(file.type);

    if (!extensionValid && !mimeValid) {
      alert('Formato inválido. Apenas arquivos Excel são permitidos.');
      return;
    }

    this.fileName.set(file.name)

    // Aqui você pode enviar o arquivo para um service ou API
    console.log('Arquivo recebido:', file);
  }

}
