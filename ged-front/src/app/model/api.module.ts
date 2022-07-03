import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { DocsControllerService } from './api/docsController.service';
import { GroupUserControllerService } from './api/groupUserController.service';
import { LiasseControllerService } from './api/liasseController.service';
import { LogPosteUserControllerService } from './api/logPosteUserController.service';
import { PosteControllerService } from './api/posteController.service';
import { RolesControllerService } from './api/rolesController.service';
import { StructureControllerService } from './api/structureController.service';
import { TypeDocsControllerService } from './api/typeDocsController.service';
import { TypeLiasseControllerService } from './api/typeLiasseController.service';
import { UsersControllerService } from './api/usersController.service';
import { WorkFlowControllerService } from './api/workFlowController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    DocsControllerService,
    GroupUserControllerService,
    LiasseControllerService,
    LogPosteUserControllerService,
    PosteControllerService,
    RolesControllerService,
    StructureControllerService,
    TypeDocsControllerService,
    TypeLiasseControllerService,
    UsersControllerService,
    WorkFlowControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
