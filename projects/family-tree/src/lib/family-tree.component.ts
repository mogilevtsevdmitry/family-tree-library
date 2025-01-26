import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FamilyTreeService } from './family-tree.service';
import { TreeNodes } from './interface';

@Component({
  selector: 'lib-family-tree',
  standalone: true,
  styleUrls: ['./family-tree.component.scss'],
  templateUrl: './family-tree.component.html',
})
export class FamilyTreeComponent implements AfterViewInit {
  @Input() persons: TreeNodes | null = null
  @ViewChild('canvas', {static: false}) canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(private readonly familyTreeService: FamilyTreeService) {}

  ngAfterViewInit(): void {
    this.familyTreeService.drawCards(this.persons, this.canvasRef.nativeElement)
  }
}
