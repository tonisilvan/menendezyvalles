;/*FB_PKG_DELIM*/

__d("CometUFICommentListComposerProvider.react",["CometUFICommentListComposerContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useContext,k=b.useMemo,l=b.useState;function a(a){a=a.children;var b=l(null),d=b[0],e=b[1];b=j(c("CometUFICommentListComposerContext"));var f=b.focusedComposerID,g=b.setFocusedComposerID;b=k(function(){return g?{focusedComposerID:f,setFocusedComposerID:g}:{focusedComposerID:d,setFocusedComposerID:e}},[d,f,g]);return i.jsx(c("CometUFICommentListComposerContext").Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFICommentListRenderer_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!0,kind:"LocalArgument",name:"canShowSeenState"},{kind:"RootArgument",name:"feedLocation"},{kind:"RootArgument",name:"feedbackSource"}],kind:"Fragment",metadata:null,name:"CometUFICommentListRenderer_feedback",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Variable",name:"feedback_source_integer",variableName:"feedbackSource"}],kind:"ScalarField",name:"is_eligible_for_enhanced_comment_updates",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_synced_qa_post",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subscription_target_id",storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"broadcast_is_ama_enabled",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Variable",name:"location",variableName:"feedLocation"},{kind:"Literal",name:"supported",value:"4AxN2k"}],concreteType:null,kind:"LinkedField",name:"comment_list_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPI_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPI",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPIPermalink_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPIPermalink",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPIMediaViewer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPIMediaViewer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPITahoe_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPITahoe",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPITahoeWithLiveVOD_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPITahoeWithLiveVOD",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPIWorkplaceKnowledgeNote_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPIWorkplaceKnowledgeNote",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForCommentsAPIBizInbox_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForCommentsAPIBizInbox",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentListRenderer_feedback",fragmentName:"CometUFICommentListRendererForMediaViewerReply_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"XFBCommentListRendererForMediaViewerReply",abstractKey:null}],storageKey:null}],type:"Feedback",abstractKey:null};e.exports=a}),null);
__d("CometUFIReparentedCommentIDsContext.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;c=b.createContext;var j=b.useCallback,k=b.useMemo,l=b.useState,m=c({addReparentedCommentIds:function(){},reparentedToDeletedCommentsMap:new Map()});function a(a){a=a.children;var b=l(new Map()),c=b[0],d=b[1],e=j(function(a){d(function(b){a.forEach(function(a,c){b.set(c,a)});return b})},[]);b=k(function(){return{addReparentedCommentIds:e,reparentedToDeletedCommentsMap:c}},[c,e]);return i.jsx(m.Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";g.CometUFIReparentedCommentIDsContext=m;g.CometUFIReparentedCommentIDsContextProvider=a}),98);
__d("CometUFICommentListRenderer.react",["CometAdPreviewContext","CometRelay","CometUFICommentListComposerProvider.react","CometUFICommentListLayoutContext","CometUFICommentListRenderer_feedback.graphql","CometUFIFunnelLoggerConstants","CometUFIQPLInstanceKeyContext","CometUFIReparentedCommentIDsContext.react","ErrorGuard","UFI2RealtimeContainer.react","mergeRefs","react","recoverableViolation","requireDeferred","useBoolean","useCometUFICodedErrorDialog","useTriggeredStoryCTAHandler"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react"));e=j;var l=e.useCallback,m=e.useContext,n=e.useMemo,o=e.useRef,p=e.useState,q=c("requireDeferred")("CometUFIDeleteCommentSubscription").__setRef("CometUFICommentListRenderer.react"),r=c("requireDeferred")("CometUFIEditCommentSubscription").__setRef("CometUFICommentListRenderer.react"),s=c("requireDeferred")("CometUFIFeedbackCommentReactSubscription").__setRef("CometUFICommentListRenderer.react"),t=c("requireDeferred")("CometUFIFunnelLogger").__setRef("CometUFICommentListRenderer.react"),u=c("requireDeferred")("CometUFIWorkQACommentTypeUpdateSubscription").__setRef("CometUFICommentListRenderer.react");function a(a){var e=a.feedback,f=a.feedbackSource,g=a.feedLocation,j=a.focusCommentID,v=a.listRef,w=a.narrow,x=a.onCommitCommentCreate;a=a.storyRenderLocation;var y=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFICommentListRenderer_feedback.graphql"),e);e=d("CometAdPreviewContext").useCometAdPreviewContext();var z=o(null),A=d("CometRelay").useRelayEnvironment(),B=c("useTriggeredStoryCTAHandler")(),C=B[0];B=p(null);var D=B[0];B=B[1];var E=p(null),F=E[0];E=E[1];var G=c("useBoolean")(!1),H=G.setTrue;G=G.value;var I=c("useCometUFICodedErrorDialog")(),J=I.errorDialog,K=I.setError;I=m(d("CometUFIReparentedCommentIDsContext.react").CometUFIReparentedCommentIDsContext);var L=I.addReparentedCommentIds,M=y==null?void 0:y.id,N=y==null?void 0:y.subscription_target_id;I=l(function(){var a;if(M==null||N==null)return null;var b=!1,d=[],e={dispose:function(){b=!0,d.forEach(function(a){return(i||(i=c("ErrorGuard"))).applyWithGuard(a,null,[])})}};s.onReady(function(a){if(!b){a=a.subscribe(A,{top_level_feedback_id:M},!1,!0);d.push(a.dispose)}});y&&y.is_eligible_for_enhanced_comment_updates===!0&&!((a=y.associated_video)==null?void 0:a.broadcast_is_ama_enabled)&&(q.onReady(function(a){if(!b){a=a.subscribe({addReparentedCommentIds:L,environment:A,feedbackSource:f,topLevelFeedbackID:M});d.push(a.dispose)}}),r.onReady(function(a){if(!b){a=a.subscribe({environment:A,topLevelFeedbackID:M});d.push(a.dispose)}}));y&&y.is_synced_qa_post===!0&&u.onReady(function(a){if(!b){a=a.subscribe({environment:A,feedbackID:M});d.push(a.dispose)}});return e},[A,y,M,f,N]);var O=m(c("CometUFIQPLInstanceKeyContext")),P=l(function(a){t.onReady(function(a){return a.addPoint(O,d("CometUFIFunnelLoggerConstants").CometUFIFunnelLoggerEvents.COMMENT_EDIT_ERROR)}),K(a)},[O,K]),Q=p(function(){return new Set()}),R=Q[0];Q=Q[1];var S=p(function(){return new Set()}),T=S[0],U=S[1];S=l(function(a){if(a==null)return;var b=(a=a.node)==null?void 0:a.id;if(b==null){c("recoverableViolation")("Could not discern an `id` having received a realtime comment. Realtime comment handling might be broken. Investigate immediately.","ufi2");return}U(function(a){return new Set(a).add(b)})},[]);var V=l(function(){C("COMMENT_BUTTON_TAP")},[C]),W=n(function(){return c("mergeRefs")(v,z)},[v]),X=n(function(){return{narrow:w}},[w]);if(M==null){c("recoverableViolation")("No id on feedback when fetching from relay story in CometUFICommentListRenderer, this indicates relays store/environment has been bonkered some how","ufi2");return null}var Y=y==null?void 0:y.comment_list_renderer;D=k.jsx(d("CometRelay").MatchContainer,{match:Y,props:{editingCommentID:D,feedbackSource:f,feedLocation:g,focusCommentID:j,handleCreateCommentProps:{onCommit:x,setError:K,setLocallyComposedCommentIds:Q},listRef:W,locallyComposedCommentIds:R,onComposerFocusCallback:V,onEditCommentError:P,onRealtimeCommentReceived:S,onTranslateAllClick:H,realtimeCommentIds:T,renderedTranslationCommentID:F,renderer:Y,setEditingCommentID:B,setRenderedTranslationCommentID:E,shouldRequestTranslationForAllComments:G,storyRenderLocation:a,useDefaultActor:!1}});return e===!0?null:k.jsxs(c("UFI2RealtimeContainer.react"),{subscribe:I,children:[k.jsx(d("CometUFIReparentedCommentIDsContext.react").CometUFIReparentedCommentIDsContextProvider,{children:k.jsx(c("CometUFICommentListComposerProvider.react"),{children:k.jsx(c("CometUFICommentListLayoutContext").Provider,{value:X,children:D})})}),J]})}a.displayName=a.name+" [from "+f.id+"]";e=k.memo(a);g["default"]=e}),98);