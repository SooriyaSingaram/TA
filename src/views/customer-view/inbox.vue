<template>
  <section id="inbox">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 main-title">
          <h2>{{ 'Inbox' | translate }}</h2>
        </div>
        <div class="col-12 content_section">
          <div class="d-flex flex-wrap inbox-wrapper">
            <div class="chat-back-arrow">
              <img src="../../assets/images/inbox-img/chat-back-arrow.png">
            </div>

            <!-- Inbox - tab -->
            <b-card no-body>
              <b-tabs pills card vertical>
                <b-tab active v-for="message in data" :key="message.InboxId">
                  <template slot="title">
                    <div
                      class="inbox-tab-element"
                      @click="chatReply(message.ReceiverId,message.CarOwnerServiceId,message.SenderId,message.InboxId)"
                    >
                      <div class="inbox-tab-element-img">
                        <img src="../../assets/images/inbox-img/user-1.png">
                      </div>
                      <div class="inbox-tab-text">
                        <mdb-icon v-if="message.IsRead==1" icon="envelope" class="search-icon"/>
                        <mdb-icon v-if="message.IsRead==0" icon="envelope-open" class="search-icon"/>

                        <span class="user-name">{{message.InboxName}}</span>
                        <span class="user-name-loc">{{message.ServiceName}}</span>
                        <span class="user-name-loc">{{message.Message}}</span>
                      </div>
                    </div>
                  </template>

                  <div id="messages" v-if="replyChat">
                    <div class="inbox_scroll" >
                      <div class="inbox-message" v-for="msg in chat">
                        <h4 class="message-header"></h4>
                        <div class="message-content">
                          <div class="msg-content">
                            <div class="msg-img">
                            </div>
                            <div class="msg-text" v-if="msg.ReceiverId==id">{{msg.Message}}</div>
                          </div>
                          <div class="message-out">
                            <div class="msg-content">
                              <div class="msg-text" v-if="msg.ReceiverId!=id">{{msg.Message}}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="inbox-action-block">
                    <i class="fa fa-paperclip" aria-hidden="true"></i>
                      <textarea
                        class="msg-type"
                        placeholder="Type Your Message..."
                        v-model="messages"
                      ></textarea>
                      <button
                        class="msgsend-btn"
                        @click="sendMsg(message.ReceiverId,message.CarOwnerServiceId,message.SenderId,messages,message.InboxId)" >
                        <img src="../../assets/images/inbox-img/send-icon.png">
                      </button>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon } from "mdbvue";
import { mapGetters } from "vuex";
import { setTimeout } from "timers";
export default {
  name: "inbox",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon
  },

  data() {
    return {
      replyChat: false,
      messages: "",
      result: {},
      id: Number
    };
  },

  created() {
    this.id = Number(JSON.parse(localStorage.getItem("userId")));
    console.log(this.id);
    this.$store.dispatch("getInboxMessages", this.id);
    this.getData();
  },
  computed: {
    ...mapGetters({
      data: "getInboxMessage",
      chat: "getReplyMessage",
      postmsg: "postChatMessage"
    })
  },

  methods: {
    getData() {
      this.result = this.data;

      // postmsg= "postChatMessage";
      console.log(this.result);
    },

    chatReply(receive, service, sender, inbox) {
      this.replyChat = true;

      let body = {
        CarOwnerServiceId: service,
        SenderId: receive,
        RecieverId: sender
      };
      console.log(body);
      this.$store.dispatch("updateRead", inbox);

      this.$store.dispatch("getReplyMessages", body);
    },

    sendMsg(rec, service, send, messages, inbox) {


      if (this.messages == "") {
      this.$message('Enter something..');
      } else {
        let body = {
          CarOwnerServiceId: service,
          SenderId: send,
          ReceiverId: rec,
          Message: messages,
          ImageName: "",
          Base64string: "",
          IsSpecialist: true,
          CreatedBy: send
        };
        console.log(body);

        this.$store.dispatch("postReplyMessage", body);
        var self = this;
        this.messages = "";
        setTimeout(function() {
          self.chatReply(rec, service, send, inbox);
        }, 500);
      }
    }
  },
  watch: {
    getInboxMessage: {
      deep: true,
      handler(value) {
        this.data = null;
        this.data = this.getInboxMessage;
      }
    }
  }
};
</script>


<style scoped>
.inbox_scroll {
  height: 578px;
  overflow: auto;
}

.search-icon {
  float: right;
  position: absolute;
  right: 15px;
}
/*5/8/2019*/
i.fa.fa-paperclip{
    font-size: 20px;
    float: left;
    background: #f2f5f7;
    padding: 16px;
}
.inbox-action-block textarea, .msgsend-btn {
    height: 52px;
   
}
.inbox-action-block textarea{
 width: 66%;
}
.message-out .msg-text {
    background-color: #cce1f6;
    color: #3b3e45;
}
.message-out .msg-text:before{
    border-left-color: #cce1f6;
}
.inbox-wrapper .nav-pills .nav-link.active {
    color: #0066d0;
    background-color: #fff;
}
.inbox-wrapper .nav-link.active .inbox-tab-text .user-name-loc,.inbox-wrapper .nav-link.active .inbox-tab-text .user-name {
    color: #0066d0;
}
inbox-wrapper .nav-link.active .inbox-tab-text .user-name-loc{color:#ffffff!important;}
.inbox-wrapper .nav-link.active .inbox-tab-text .user-name{color:#ffffff!important;}
.inbox-tab-text .user-name-loc{float:none;}

</style>
