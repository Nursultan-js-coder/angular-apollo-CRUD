import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryCache } from '@apollo/client/core';
import { NgbdAccordionBasicModule } from './components/common/accordion/accordion.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsServiceService } from './services/posts-service.service';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FormComponent } from './components/common/form/form.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
// import { AccordionComponent } from './components/common/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePostComponent,
    PostsComponent,
    HeaderComponent,
    FormComponent,
    PostComponent,
    PostDetailComponent,
    // AccordionComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbdAccordionBasicModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:5000',
          }),
        };
      },
      deps: [HttpLink],
    },
    PostsServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
