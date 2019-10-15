package com.hcl.hackathon;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.hcl.hackathon.controller.NotificationResource;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
public class NotifyResourceTest {
 
    private MockMvc mockMvc;
 
    @InjectMocks
    private NotificationResource notificationService;
    
    @Before
    public void init(){
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(notificationService)
                .build();
    }

 
    //Add WebApplicationContext field here.
 
    //The setUp() method is omitted.
 
    @Test
    public void notificationTestCase() throws Exception {
       // when(notificationServiceMock.findById(1L)).thenThrow(new TodoNotFoundException(""));
    	mockMvc.perform(post("/rest/hackathon/notifyUser/{appId}", 1L)
                .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk());
    }
}
