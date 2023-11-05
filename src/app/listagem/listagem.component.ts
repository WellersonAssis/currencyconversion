import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { IListHistory } from "../model/IListHistory";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ListagemService } from "./listagem.service";


@Component({
    selector: 'app-list-conversion',
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.css']
})

export class ListagemComponent implements OnInit {

    displayedColumns: string[] = [
        'data',
        'hora',
        'moedaOrigem',
        'moedaDestino',
        'valorEntrada',
        'valorSaida',
        'taxaConversao',
        'acoes',
    ];

    history: MatTableDataSource<IListHistory> = new MatTableDataSource<IListHistory>([]);

    @ViewChild('input', { static: true }) input: HTMLInputElement | undefined;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
    @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;

    constructor(private listagemService: ListagemService) {
        this.history = new MatTableDataSource<IListHistory>([]);
    }


    ngOnInit(): void {
        const historyData = JSON.parse(localStorage.getItem('history') || '[]');
        historyData.reverse();
        this.history.data = historyData;

        if (this.paginator) {
            this.history.paginator = this.paginator;
        }
        if (this.sort) {
            this.history.sort = this.sort;
        }
    }

    excluirHistorico(conversao: IListHistory) {
        this.history.data = this.listagemService.obterHistoricoCompleto();
        this.listagemService.excluirHistorico(conversao);
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.history.filter = filterValue.trim().toLowerCase();
    }

}