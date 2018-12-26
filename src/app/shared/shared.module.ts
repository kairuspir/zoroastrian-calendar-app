import { NgModule, ModuleWithProviders } from "@angular/core";

@NgModule({
    declarations: [],
    imports: [],
    exports: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        }
    }
}