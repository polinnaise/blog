import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { environment } from 'src/environments/environment';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { PostService, API_BASE_URL,  } from './services/post.service';
import { PostInterceptor } from './services/post.interceptor';
import { PostCreateComponent} from './post-create/post-create.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MainComponent,
    PostsComponent,
    PostCreateComponent
  ],
  imports: [
        // Angular    
        BrowserModule,    
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FlexLayoutModule,
    
        //App
        AppRoutingModule,
    
        // Material
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatSelectModule,
        MatChipsModule
  ],
  providers: [ 
    PostService,
    { provide: API_BASE_URL, 
      useValue: environment.apiRoot },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: PostInterceptor,
      multi: true
    }
  ],  

  bootstrap: [AppComponent]
})
export class AppModule { }
