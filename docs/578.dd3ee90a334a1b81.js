"use strict";(self.webpackChunkangular_material_admin=self.webpackChunkangular_material_admin||[]).push([[578],{4715:(fe,H,C)=>{C.d(H,{b:()=>m});var s=C(2916);function m(M){return!!M&&(M instanceof s.y||"function"==typeof M.lift&&"function"==typeof M.subscribe)}},7796:(fe,H,C)=>{C.d(H,{pN:()=>T,hD:()=>a,O_:()=>E,Kb:()=>j,fo:()=>_,QJ:()=>he,Z4:()=>N,qM:()=>ye,fe:()=>G,Af:()=>re,D5:()=>B,xN:()=>Ce,s$:()=>D,r2:()=>me,_J:()=>De,Sq:()=>O,zC:()=>ge,HT:()=>Se,Hx:()=>Re,T$:()=>ie,$E:()=>de,FT:()=>le,bH:()=>ce,pF:()=>_e,nl:()=>u,oF:()=>h});var s=C(3191),m=C(449),M=C(9808),t=C(5e3),U=C(5529),q=C(5254),Q=C(591),oe=C(4715),V=C(1086),A=C(7625),z=C(2986),W=C(226),J=C(925),K=C(7960);const Z=[[["caption"]],[["colgroup"],["col"]]],ne=["caption","colgroup, col"];function ee(n,i){if(1&n&&(t.TgZ(0,"th",3),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.Udp("text-align",e.justify),t.xp6(1),t.hij(" ",e.headerText," ")}}function ae(n,i){if(1&n&&(t.TgZ(0,"td",4),t._uU(1),t.qZA()),2&n){const e=i.$implicit,o=t.oxw();t.Udp("text-align",o.justify),t.xp6(1),t.hij(" ",o.dataAccessor(e,o.name)," ")}}function X(n){return class extends n{constructor(...i){super(...i),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(i){const e=this._sticky;this._sticky=(0,s.Ig)(i),this._hasStickyChanged=e!==this._sticky}hasStickyChanged(){const i=this._hasStickyChanged;return this._hasStickyChanged=!1,i}resetStickyChanged(){this._hasStickyChanged=!1}}}const T=new t.OlP("CDK_TABLE"),te=new t.OlP("text-column-options");let E=(()=>{class n{constructor(e){this.template=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Rgc))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkCellDef",""]]}),n})(),B=(()=>{class n{constructor(e){this.template=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Rgc))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkHeaderCellDef",""]]}),n})(),N=(()=>{class n{constructor(e){this.template=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Rgc))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkFooterCellDef",""]]}),n})();class f{}const g=X(f);let _=(()=>{class n extends g{constructor(e){super(),this._table=e,this._stickyEnd=!1}get name(){return this._name}set name(e){this._setNameInput(e)}get stickyEnd(){return this._stickyEnd}set stickyEnd(e){const o=this._stickyEnd;this._stickyEnd=(0,s.Ig)(e),this._hasStickyChanged=o!==this._stickyEnd}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(e,o,r){if(1&e&&(t.Suo(r,E,5),t.Suo(r,B,5),t.Suo(r,N,5)),2&e){let d;t.iGM(d=t.CRH())&&(o.cell=d.first),t.iGM(d=t.CRH())&&(o.headerCell=d.first),t.iGM(d=t.CRH())&&(o.footerCell=d.first)}},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[t._Bn([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:n}]),t.qOj]}),n})();class x{constructor(i,e){const o=e.nativeElement.classList;for(const r of i._columnCssClassName)o.add(r)}}let re=(()=>{class n extends x{constructor(e,o){super(e,o)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_),t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[t.qOj]}),n})(),he=(()=>{class n extends x{constructor(e,o){var r;if(super(e,o),1===(null===(r=e._table)||void 0===r?void 0:r._elementRef.nativeElement.nodeType)){const d=e._table._elementRef.nativeElement.getAttribute("role");o.nativeElement.setAttribute("role","grid"===d||"treegrid"===d?"gridcell":"cell")}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_),t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n,selectors:[["cdk-footer-cell"],["td","cdk-footer-cell",""]],hostAttrs:[1,"cdk-footer-cell"],features:[t.qOj]}),n})(),a=(()=>{class n extends x{constructor(e,o){var r;if(super(e,o),1===(null===(r=e._table)||void 0===r?void 0:r._elementRef.nativeElement.nodeType)){const d=e._table._elementRef.nativeElement.getAttribute("role");o.nativeElement.setAttribute("role","grid"===d||"treegrid"===d?"gridcell":"cell")}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_),t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[t.qOj]}),n})();class l{constructor(){this.tasks=[],this.endTasks=[]}}const u=new t.OlP("_COALESCED_STYLE_SCHEDULER");let h=(()=>{class n{constructor(e){this._ngZone=e,this._currentSchedule=null,this._destroyed=new U.xQ}schedule(e){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(e)}scheduleEnd(e){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(e)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new l,this._getScheduleObservable().pipe((0,A.R)(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){const e=this._currentSchedule;this._currentSchedule=new l;for(const o of e.tasks)o();for(const o of e.endTasks)o()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?(0,q.D)(Promise.resolve(void 0)):this._ngZone.onStable.pipe((0,z.q)(1))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(t.R0b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),k=(()=>{class n{constructor(e,o){this.template=e,this._differs=o}ngOnChanges(e){if(!this._columnsDiffer){const o=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(o).create(),this._columnsDiffer.diff(o)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof D?e.headerCell.template:this instanceof G?e.footerCell.template:e.cell.template}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Rgc),t.Y36(t.ZZ4))},n.\u0275dir=t.lG2({type:n,features:[t.TTD]}),n})();class L extends k{}const P=X(L);let D=(()=>{class n extends P{constructor(e,o,r){super(e,o),this._table=r}ngOnChanges(e){super.ngOnChanges(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Rgc),t.Y36(t.ZZ4),t.Y36(T,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[t.qOj,t.TTD]}),n})();class I extends k{}const se=X(I);let G=(()=>{class n extends se{constructor(e,o,r){super(e,o),this._table=r}ngOnChanges(e){super.ngOnChanges(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Rgc),t.Y36(t.ZZ4),t.Y36(T,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[t.qOj,t.TTD]}),n})(),O=(()=>{class n extends k{constructor(e,o,r){super(e,o),this._table=r}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Rgc),t.Y36(t.ZZ4),t.Y36(T,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[t.qOj]}),n})(),j=(()=>{class n{constructor(e){this._viewContainer=e,n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}}return n.mostRecentCellOutlet=null,n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkCellOutlet",""]]}),n})(),Ce=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,o){1&e&&t.GkF(0,0)},directives:[j],encapsulation:2}),n})(),ye=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["cdk-footer-row"],["tr","cdk-footer-row",""]],hostAttrs:["role","row",1,"cdk-footer-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,o){1&e&&t.GkF(0,0)},directives:[j],encapsulation:2}),n})(),De=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,o){1&e&&t.GkF(0,0)},directives:[j],encapsulation:2}),n})(),me=(()=>{class n{constructor(e){this.templateRef=e,this._contentClassName="cdk-no-data-row"}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Rgc))},n.\u0275dir=t.lG2({type:n,selectors:[["ng-template","cdkNoDataRow",""]]}),n})();const we=["top","bottom","left","right"];class Me{constructor(i,e,o,r,d=!0,c=!0,p){this._isNativeHtmlTable=i,this._stickCellCss=e,this.direction=o,this._coalescedStyleScheduler=r,this._isBrowser=d,this._needsPositionStickyOnElement=c,this._positionListener=p,this._cachedCellWidths=[],this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(i,e){const o=[];for(const r of i)if(r.nodeType===r.ELEMENT_NODE){o.push(r);for(let d=0;d<r.children.length;d++)o.push(r.children[d])}this._coalescedStyleScheduler.schedule(()=>{for(const r of o)this._removeStickyStyle(r,e)})}updateStickyColumns(i,e,o,r=!0){if(!i.length||!this._isBrowser||!e.some(w=>w)&&!o.some(w=>w))return void(this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]})));const d=i[0],c=d.children.length,p=this._getCellWidths(d,r),y=this._getStickyStartColumnPositions(p,e),F=this._getStickyEndColumnPositions(p,o),R=e.lastIndexOf(!0),S=o.indexOf(!0);this._coalescedStyleScheduler.schedule(()=>{const w="rtl"===this.direction,$=w?"right":"left",pe=w?"left":"right";for(const Y of i)for(let b=0;b<c;b++){const ve=Y.children[b];e[b]&&this._addStickyStyle(ve,$,y[b],b===R),o[b]&&this._addStickyStyle(ve,pe,F[b],b===S)}this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:-1===R?[]:p.slice(0,R+1).map((Y,b)=>e[b]?Y:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:-1===S?[]:p.slice(S).map((Y,b)=>o[b+S]?Y:null).reverse()}))})}stickRows(i,e,o){if(!this._isBrowser)return;const r="bottom"===o?i.slice().reverse():i,d="bottom"===o?e.slice().reverse():e,c=[],p=[],y=[];for(let R=0,S=0;R<r.length;R++){if(!d[R])continue;c[R]=S;const w=r[R];y[R]=this._isNativeHtmlTable?Array.from(w.children):[w];const $=w.getBoundingClientRect().height;S+=$,p[R]=$}const F=d.lastIndexOf(!0);this._coalescedStyleScheduler.schedule(()=>{var R,S;for(let w=0;w<r.length;w++){if(!d[w])continue;const $=c[w],pe=w===F;for(const Y of y[w])this._addStickyStyle(Y,o,$,pe)}"top"===o?null===(R=this._positionListener)||void 0===R||R.stickyHeaderRowsUpdated({sizes:p,offsets:c,elements:y}):null===(S=this._positionListener)||void 0===S||S.stickyFooterRowsUpdated({sizes:p,offsets:c,elements:y})})}updateStickyFooterContainer(i,e){if(!this._isNativeHtmlTable)return;const o=i.querySelector("tfoot");this._coalescedStyleScheduler.schedule(()=>{e.some(r=>!r)?this._removeStickyStyle(o,["bottom"]):this._addStickyStyle(o,"bottom",0,!1)})}_removeStickyStyle(i,e){for(const r of e)i.style[r]="",i.classList.remove(this._borderCellCss[r]);we.some(r=>-1===e.indexOf(r)&&i.style[r])?i.style.zIndex=this._getCalculatedZIndex(i):(i.style.zIndex="",this._needsPositionStickyOnElement&&(i.style.position=""),i.classList.remove(this._stickCellCss))}_addStickyStyle(i,e,o,r){i.classList.add(this._stickCellCss),r&&i.classList.add(this._borderCellCss[e]),i.style[e]=`${o}px`,i.style.zIndex=this._getCalculatedZIndex(i),this._needsPositionStickyOnElement&&(i.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(i){const e={top:100,bottom:10,left:1,right:1};let o=0;for(const r of we)i.style[r]&&(o+=e[r]);return o?`${o}`:""}_getCellWidths(i,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;const o=[],r=i.children;for(let d=0;d<r.length;d++)o.push(r[d].getBoundingClientRect().width);return this._cachedCellWidths=o,o}_getStickyStartColumnPositions(i,e){const o=[];let r=0;for(let d=0;d<i.length;d++)e[d]&&(o[d]=r,r+=i[d]);return o}_getStickyEndColumnPositions(i,e){const o=[];let r=0;for(let d=i.length;d>0;d--)e[d]&&(o[d]=r,r+=i[d]);return o}}const _e=new t.OlP("CDK_SPL");let ie=(()=>{class n{constructor(e,o){this.viewContainer=e,this.elementRef=o}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n,selectors:[["","rowOutlet",""]]}),n})(),le=(()=>{class n{constructor(e,o){this.viewContainer=e,this.elementRef=o}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n,selectors:[["","headerRowOutlet",""]]}),n})(),de=(()=>{class n{constructor(e,o){this.viewContainer=e,this.elementRef=o}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n,selectors:[["","footerRowOutlet",""]]}),n})(),ce=(()=>{class n{constructor(e,o){this.viewContainer=e,this.elementRef=o}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n,selectors:[["","noDataRowOutlet",""]]}),n})(),ge=(()=>{class n{constructor(e,o,r,d,c,p,y,F,R,S,w){this._differs=e,this._changeDetectorRef=o,this._elementRef=r,this._dir=c,this._platform=y,this._viewRepeater=F,this._coalescedStyleScheduler=R,this._viewportRuler=S,this._stickyPositioningListener=w,this._onDestroy=new U.xQ,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._stickyColumnStylesNeedReset=!0,this._forceRecalculateCellWidths=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this._fixedLayout=!1,this.contentChanged=new t.vpe,this.viewChange=new Q.X({start:0,end:Number.MAX_VALUE}),d||this._elementRef.nativeElement.setAttribute("role","table"),this._document=p,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=(0,s.Ig)(e),this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._fixedLayout}set fixedLayout(e){this._fixedLayout=(0,s.Ig)(e),this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((e,o)=>this.trackBy?this.trackBy(o.dataIndex,o.data):o),this._viewportRuler.change().pipe((0,A.R)(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentChecked(){this._cacheRowDefs(),this._cacheColumnDefs();const o=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||o,this._forceRecalculateCellWidths=o,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){this._rowOutlet.viewContainer.clear(),this._noDataRowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),(0,m.Z9)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const e=this._dataDiffer.diff(this._renderRows);if(!e)return this._updateNoDataRow(),void this.contentChanged.next();const o=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,o,(r,d,c)=>this._getEmbeddedViewArgs(r.item,c),r=>r.item.data,r=>{1===r.operation&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{o.get(r.currentIndex).context.$implicit=r.item.data}),this._updateNoDataRow(),this.updateStickyColumnStyles(),this.contentChanged.next()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){const e=this._getRenderedRows(this._headerRowOutlet),r=this._elementRef.nativeElement.querySelector("thead");r&&(r.style.display=e.length?"":"none");const d=this._headerRowDefs.map(c=>c.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,d,"top"),this._headerRowDefs.forEach(c=>c.resetStickyChanged())}updateStickyFooterRowStyles(){const e=this._getRenderedRows(this._footerRowOutlet),r=this._elementRef.nativeElement.querySelector("tfoot");r&&(r.style.display=e.length?"":"none");const d=this._footerRowDefs.map(c=>c.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,d,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,d),this._footerRowDefs.forEach(c=>c.resetStickyChanged())}updateStickyColumnStyles(){const e=this._getRenderedRows(this._headerRowOutlet),o=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...o,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((d,c)=>{this._addStickyColumnStyles([d],this._headerRowDefs[c])}),this._rowDefs.forEach(d=>{const c=[];for(let p=0;p<o.length;p++)this._renderRows[p].rowDef===d&&c.push(o[p]);this._addStickyColumnStyles(c,d)}),r.forEach((d,c)=>{this._addStickyColumnStyles([d],this._footerRowDefs[c])}),Array.from(this._columnDefsByName.values()).forEach(d=>d.resetStickyChanged())}_getAllRenderRows(){const e=[],o=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=0;r<this._data.length;r++){let d=this._data[r];const c=this._getRenderRowsForData(d,r,o.get(d));this._cachedRenderRowsMap.has(d)||this._cachedRenderRowsMap.set(d,new WeakMap);for(let p=0;p<c.length;p++){let y=c[p];const F=this._cachedRenderRowsMap.get(y.data);F.has(y.rowDef)?F.get(y.rowDef).push(y):F.set(y.rowDef,[y]),e.push(y)}}return e}_getRenderRowsForData(e,o,r){return this._getRowDefs(e,o).map(c=>{const p=r&&r.has(c)?r.get(c):[];if(p.length){const y=p.shift();return y.dataIndex=o,y}return{data:e,rowDef:c,dataIndex:o}})}_cacheColumnDefs(){this._columnDefsByName.clear(),ue(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(o=>{this._columnDefsByName.has(o.name),this._columnDefsByName.set(o.name,o)})}_cacheRowDefs(){this._headerRowDefs=ue(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=ue(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=ue(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const e=this._rowDefs.filter(o=>!o.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){const e=(c,p)=>c||!!p.getColumnsDiff(),o=this._rowDefs.reduce(e,!1);o&&this._forceRenderDataRows();const r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();const d=this._footerRowDefs.reduce(e,!1);return d&&this._forceRenderFooterRows(),o||r||d}_switchDataSource(e){this._data=[],(0,m.Z9)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;(0,m.Z9)(this.dataSource)?e=this.dataSource.connect(this):(0,oe.b)(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=(0,V.of)(this.dataSource)),this._renderChangeSubscription=e.pipe((0,A.R)(this._onDestroy)).subscribe(o=>{this._data=o||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,o)=>this._renderRow(this._headerRowOutlet,e,o)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,o)=>this._renderRow(this._footerRowOutlet,e,o)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,o){const r=Array.from(o.columns||[]).map(p=>this._columnDefsByName.get(p)),d=r.map(p=>p.sticky),c=r.map(p=>p.stickyEnd);this._stickyStyler.updateStickyColumns(e,d,c,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){const o=[];for(let r=0;r<e.viewContainer.length;r++){const d=e.viewContainer.get(r);o.push(d.rootNodes[0])}return o}_getRowDefs(e,o){if(1==this._rowDefs.length)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(d=>!d.when||d.when(o,e));else{let d=this._rowDefs.find(c=>c.when&&c.when(o,e))||this._defaultRowDef;d&&r.push(d)}return r}_getEmbeddedViewArgs(e,o){return{templateRef:e.rowDef.template,context:{$implicit:e.data},index:o}}_renderRow(e,o,r,d={}){const c=e.viewContainer.createEmbeddedView(o.template,d,r);return this._renderCellTemplateForItem(o,d),c}_renderCellTemplateForItem(e,o){for(let r of this._getCellTemplates(e))j.mostRecentCellOutlet&&j.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,o);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const e=this._rowOutlet.viewContainer;for(let o=0,r=e.length;o<r;o++){const c=e.get(o).context;c.count=r,c.first=0===o,c.last=o===r-1,c.even=o%2==0,c.odd=!c.even,this.multiTemplateDataRows?(c.dataIndex=this._renderRows[o].dataIndex,c.renderIndex=o):c.index=this._renderRows[o].dataIndex}}_getCellTemplates(e){return e&&e.columns?Array.from(e.columns,o=>{const r=this._columnDefsByName.get(o);return e.extractCellTemplate(r)}):[]}_applyNativeTableSections(){const e=this._document.createDocumentFragment(),o=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const r of o){const d=this._document.createElement(r.tag);d.setAttribute("role","rowgroup");for(const c of r.outlets)d.appendChild(c.elementRef.nativeElement);e.appendChild(d)}this._elementRef.nativeElement.appendChild(e)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const e=(o,r)=>o||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){this._stickyStyler=new Me(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener),(this._dir?this._dir.change:(0,V.of)()).pipe((0,A.R)(this._onDestroy)).subscribe(o=>{this._stickyStyler.direction=o,this.updateStickyColumnStyles()})}_getOwnDefs(e){return e.filter(o=>!o._table||o._table===this)}_updateNoDataRow(){const e=this._customNoDataRow||this._noDataRow;if(!e)return;const o=0===this._rowOutlet.viewContainer.length;if(o===this._isShowingNoDataRow)return;const r=this._noDataRowOutlet.viewContainer;if(o){const d=r.createEmbeddedView(e.templateRef),c=d.rootNodes[0];1===d.rootNodes.length&&(null==c?void 0:c.nodeType)===this._document.ELEMENT_NODE&&(c.setAttribute("role","row"),c.classList.add(e._contentClassName))}else r.clear();this._isShowingNoDataRow=o}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.ZZ4),t.Y36(t.sBO),t.Y36(t.SBq),t.$8M("role"),t.Y36(W.Is,8),t.Y36(M.K0),t.Y36(J.t4),t.Y36(m.k),t.Y36(u),t.Y36(K.rL),t.Y36(_e,12))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(e,o,r){if(1&e&&(t.Suo(r,me,5),t.Suo(r,_,5),t.Suo(r,O,5),t.Suo(r,D,5),t.Suo(r,G,5)),2&e){let d;t.iGM(d=t.CRH())&&(o._noDataRow=d.first),t.iGM(d=t.CRH())&&(o._contentColumnDefs=d),t.iGM(d=t.CRH())&&(o._contentRowDefs=d),t.iGM(d=t.CRH())&&(o._contentHeaderRowDefs=d),t.iGM(d=t.CRH())&&(o._contentFooterRowDefs=d)}},viewQuery:function(e,o){if(1&e&&(t.Gf(ie,7),t.Gf(le,7),t.Gf(de,7),t.Gf(ce,7)),2&e){let r;t.iGM(r=t.CRH())&&(o._rowOutlet=r.first),t.iGM(r=t.CRH())&&(o._headerRowOutlet=r.first),t.iGM(r=t.CRH())&&(o._footerRowOutlet=r.first),t.iGM(r=t.CRH())&&(o._noDataRowOutlet=r.first)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(e,o){2&e&&t.ekj("cdk-table-fixed-layout",o.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows",fixedLayout:"fixedLayout"},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[t._Bn([{provide:T,useExisting:n},{provide:m.k,useClass:m.yy},{provide:u,useClass:h},{provide:_e,useValue:null}])],ngContentSelectors:ne,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,o){1&e&&(t.F$t(Z),t.Hsn(0),t.Hsn(1,1),t.GkF(2,0),t.GkF(3,1),t.GkF(4,2),t.GkF(5,3))},directives:[le,ie,ce,de],styles:[".cdk-table-fixed-layout{table-layout:fixed}\n"],encapsulation:2}),n})();function ue(n,i){return n.concat(Array.from(i))}let Re=(()=>{class n{constructor(e,o){this._table=e,this._options=o,this.justify="start",this._options=o||{}}get name(){return this._name}set name(e){this._name=e,this._syncColumnDefName()}ngOnInit(){this._syncColumnDefName(),void 0===this.headerText&&(this.headerText=this._createDefaultHeaderText()),this.dataAccessor||(this.dataAccessor=this._options.defaultDataAccessor||((e,o)=>e[o])),this._table&&(this.columnDef.cell=this.cell,this.columnDef.headerCell=this.headerCell,this._table.addColumnDef(this.columnDef))}ngOnDestroy(){this._table&&this._table.removeColumnDef(this.columnDef)}_createDefaultHeaderText(){const e=this.name;return this._options&&this._options.defaultHeaderTextTransform?this._options.defaultHeaderTextTransform(e):e[0].toUpperCase()+e.slice(1)}_syncColumnDefName(){this.columnDef&&(this.columnDef.name=this.name)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(ge,8),t.Y36(te,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cdk-text-column"]],viewQuery:function(e,o){if(1&e&&(t.Gf(_,7),t.Gf(E,7),t.Gf(B,7)),2&e){let r;t.iGM(r=t.CRH())&&(o.columnDef=r.first),t.iGM(r=t.CRH())&&(o.cell=r.first),t.iGM(r=t.CRH())&&(o.headerCell=r.first)}},inputs:{name:"name",headerText:"headerText",dataAccessor:"dataAccessor",justify:"justify"},decls:3,vars:0,consts:[["cdkColumnDef",""],["cdk-header-cell","",3,"text-align",4,"cdkHeaderCellDef"],["cdk-cell","",3,"text-align",4,"cdkCellDef"],["cdk-header-cell",""],["cdk-cell",""]],template:function(e,o){1&e&&(t.ynx(0,0),t.YNc(1,ee,2,3,"th",1),t.YNc(2,ae,2,3,"td",2),t.BQk())},directives:[_,B,E,re,a],encapsulation:2}),n})(),Se=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[K.Cl]]}),n})()},9224:(fe,H,C)=>{C.d(H,{a8:()=>te,hq:()=>J,kc:()=>T,dn:()=>A,dk:()=>E,G2:()=>Z,QW:()=>N,$j:()=>W,n5:()=>z});var s=C(5e3),m=C(6360),M=C(508);const t=["*",[["mat-card-footer"]]],U=["*","mat-card-footer"],q=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Q=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let A=(()=>{class f{}return f.\u0275fac=function(_){return new(_||f)},f.\u0275dir=s.lG2({type:f,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),f})(),z=(()=>{class f{}return f.\u0275fac=function(_){return new(_||f)},f.\u0275dir=s.lG2({type:f,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),f})(),W=(()=>{class f{}return f.\u0275fac=function(_){return new(_||f)},f.\u0275dir=s.lG2({type:f,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),f})(),J=(()=>{class f{constructor(){this.align="start"}}return f.\u0275fac=function(_){return new(_||f)},f.\u0275dir=s.lG2({type:f,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(_,x){2&_&&s.ekj("mat-card-actions-align-end","end"===x.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),f})(),Z=(()=>{class f{}return f.\u0275fac=function(_){return new(_||f)},f.\u0275dir=s.lG2({type:f,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),f})(),T=(()=>{class f{}return f.\u0275fac=function(_){return new(_||f)},f.\u0275dir=s.lG2({type:f,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-card-avatar"]}),f})(),te=(()=>{class f{constructor(_){this._animationMode=_}}return f.\u0275fac=function(_){return new(_||f)(s.Y36(m.Qb,8))},f.\u0275cmp=s.Xpm({type:f,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(_,x){2&_&&s.ekj("_mat-animation-noopable","NoopAnimations"===x._animationMode)},exportAs:["matCard"],ngContentSelectors:U,decls:2,vars:0,template:function(_,x){1&_&&(s.F$t(t),s.Hsn(0),s.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),f})(),E=(()=>{class f{}return f.\u0275fac=function(_){return new(_||f)},f.\u0275cmp=s.Xpm({type:f,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:Q,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(_,x){1&_&&(s.F$t(q),s.Hsn(0),s.TgZ(1,"div",0),s.Hsn(2,1),s.qZA(),s.Hsn(3,2))},encapsulation:2,changeDetection:0}),f})(),N=(()=>{class f{}return f.\u0275fac=function(_){return new(_||f)},f.\u0275mod=s.oAB({type:f}),f.\u0275inj=s.cJS({imports:[[M.BQ],M.BQ]}),f})()},8279:(fe,H,C)=>{C.d(H,{p0:()=>_});var s=C(5e3),m=C(7796),t=(C(449),C(508));let _=(()=>{class a{}return a.\u0275fac=function(u){return new(u||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[[m.HT,t.BQ],t.BQ]}),a})()}}]);