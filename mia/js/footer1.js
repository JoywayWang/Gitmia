class Footer {
    constructor(root) {
        this.root = root;
        // this.data = data;
    }
    init() {
        this.creEle();
    }
    creEle() {
        let html = ` <div class="content">
            <div class="foottop">
                <div class="fbox">
                    <a href="##"><img src="../img/1.png"><b>可信赖</b>进口母婴特卖</a>
                    <a href="##"><img src="../img/2.png"><b>无忧</b>正品保证</a>
                    <a href="##"><img src="../img/3.png"><b>7天</b>无理由退货</a>
                    <a href="##"><img src="../img/4.png"><b>恒温仓</b>完善的货物仓储</a>
                    <a href="##"><img src="../img/5.png"><b>24小时</b>快速发货</a>
                    <a href="##"><img src="../img/6.png"><b>100万</b>妈妈口碑信赖</a>
                </div>
            </div>
            <div class="footmid">
                <div class="fbox clearfix">
                    <div class="f-r fr">
                        <ul class="f-ul">
                            <li class="f-erweima fl">关注蜜芽</li>
                            <li>
                                <img src="https://img.miyabaobei.com/d1/p4/2016/11/15/3e/f6/3ef603e61e175352d66addb2b55722b2978255723.jpg"
                                    alt="手机蜜芽">
                                <div class="right">
                                    <a href="https://weibo.com/miyabaobei2014">
                                        <img src="https://file02.miyabaobei.com/resources/images/index_fd_wb.gif"
                                            alt="官方微博"></a>
                                    <div class="PubBtnHover">
                                        <img src="https://file02.miyabaobei.com/resources/images/index_fd_wx.gif"
                                            alt="官方微信">
                                        <img src="https://img.miyabaobei.com/d1/p4/2016/11/15/f9/5d/f95d91315ebdb1f30c256c911c300dff979622189.png"
                                            class="wxmore" alt="">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="f-l fl">
                        <ul>
                            <li class="strong">使用帮助</li>
                            <li><a href="##">新手指南</a></li>
                            <li><a href="##">会员体系</a></li>
                            <li><a href="##">推广公约</a></li>
                            <li><a href="##">正品承诺</a></li>
                        </ul>
                        <ul>
                            <li class="strong">支付方式</li>
                            <li><a href="##">支付方式</a></li>
                            <li><a href="##">支付流程</a></li>
                            <li><a href="##">跨境进口税</a></li>
                        </ul>
                        <ul>
                            <li class="strong">配送方式</li>
                            <li><a href="##">包邮政策</a></li>
                            <li><a href="##">发货时间</a></li>
                            <li><a href="##">配送区域</a></li>
                            <li><a href="##">验货签收</a></li>
                        </ul>
                        <ul>
                            <li class="strong">售后服务</li>
                            <li><a href="##">退货政策</a></li>
                            <li><a href="##">退货流程</a></li>
                            <li><a href="##">退款方式</a></li>
                        </ul>
                        <ul style="width:200px;">
                            <li class="strong">联系方式</li>
                            <li>总裁邮箱 ceo@mia.com</li>
                            <li>商务合作 bd@mia.com</li>
                            <li>媒体合作 pr@mia.com</li>
                            <li>招商中心 zhaoshang@mia.com</li>
                            <li>企业采购 qiye@mia.com</li>
                            <li>廉政举报 jiancha@mia.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footbot">
                <div class="fbox">
                    <p>
                        <a href="##">关于蜜芽</a> |
                        <a href="##">加入蜜芽</a> |
                        <a href="##">商务合作</a> |
                        <a href="##">帮助中心</a> |
                        <a href="##">联系我们</a> |
                        <a href="##">友情链接</a> |
                        <a href="##">触屏版</a> |
                        <a href="##">媒体报道</a> |
                        <a href="##">营业执照</a>
                    </p>
                    京公网安备：11010502027270 | 营业执照：91110105582599307U | 食品经营许可证：SP1101051410296669 | 出版物经营许可证：新出发京零字第朝<a
                        href="##">160088号</a> <br> 沪ICP备16004431号-2 | 员工舞弊举报：jiancha@mia.com 电话：010-56733467<br>
                    Copyright © 2019 蜜缇(上海)网络科技有限公司 Mia.com 保留一切权利。<br>
                    <p class="cert">
                        <a href=##"><img
                                src="//img.miyabaobei.com/d1/p5/2017/12/01/78/6d/786de03b6e7d22ca19e6476983315bc5109099620.jpg"></a>
                        <span><a href="##">
                                <img alt="可信网站"
                                    src="https://img.miyabaobei.com/d1/p4/2016/11/15/45/28/4528ccca07835b01064270e69e08adc0943841428.png"></a></span>
                        <img src="https://file02.miyabaobei.com/resources/images/res/alipay.jpg">
                    </p>
                </div>
            </div>
        </div>`;
        $(this.root).html(html);
    }
}