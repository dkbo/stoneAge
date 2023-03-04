<template>
    <div class="container">
        <Row>
            <Col span="12">
                <Row>
                    <Col span="6">
                        <Button type="info" long> 基礎素質 </Button>
                    </Col>
                    <Col span="6">
                        <Select
                            v-model="platform"
                            @input="handleChangePlatform"
                            filterable
                            long
                        >
                            <Option
                                v-for="({ platform }, i) in petData"
                                :label="platform"
                                :key="platform"
                                :value="i"
                            />
                        </Select>
                    </Col>
                    <Col span="6">
                        <Select
                            v-model="name2"
                            @input="handleChange"
                            filterable
                            long
                        >
                            <OptionGroup
                                v-for="(petCate, i) in getPetData"
                                :label="petCate.name"
                                :key="petCate.name"
                            >
                                <Option
                                    v-for="(pet, j) in petCate.arr"
                                    :value="`${i}.${j}`"
                                    :key="pet.name"
                                    :label="pet.name"
                                />
                            </OptionGroup>
                        </Select>
                    </Col>
                    <Col span="6">
                        <Input v-model="name" placeholder="寵物名稱" />
                    </Col>
                </Row>
                <CalcInput
                    :v="GPF"
                    :PH="['等級', '係數', '體', '腕', '耐', '速']"
                />
                <Row>
                    <Col span="24">
                        <Button
                            type="success"
                            long
                            icon="ios-search"
                            @click="handleCalc"
                        >
                            計算
                        </Button>
                    </Col>
                </Row>
            </Col>
            <Col span="12">
                <Button
                    type="ghost"
                    long
                    icon="ios-search"
                    @click="handleRecodeCalc(i)"
                    v-for="({ GPF, name }, i) in storage"
                    :key="i"
                >
                    {{ `${name} ${GPF.join()}` }}
                </Button>
            </Col>
        </Row>
        <Row>
            <Col span="24">
                <Page
                    :total="data.length"
                    :page-size="15"
                    show-total
                    class="paging"
                    v-if="data.length"
                    @on-change="handleChangePage"
                />
                <Table
                    border
                    :columns="columns"
                    :data="pageData"
                    :loading="loading"
                />
            </Col>
        </Row>
    </div>
</template>
<script>
import {
    calcPostive,
    setStorage,
    getStorage,
    b64EncodeUnicode,
    b64DecodeUnicode,
} from "@UTIL";
import petData from "@UTIL/petData";
import CalcInput from "@C/CALCINPUT";
export default {
    name: "Home",
    data() {
        const storage = getStorage("CalcPostiveHp") || [];
        const platform = getStorage("platform") || 0;
        const arr2 = [...Array(17)].map((x, i) => {
            const n = 8 - i;
            return {
                title: n,
                key: `c${n}`,
                align: "center",
                className: "color1",
            };
        });
        const health2 = {
            title: "各檔次毒血量",
            align: "center",
            className: "color1",
            children: [
                {
                    title: "等級",
                    key: "lv",
                    align: "center",
                    className: "color1",
                },
                ...arr2,
            ],
        };
        const arr = ["", "", "", ""];
        return {
            loading: false,
            platform,
            pageIndex: 1,
            name: "",
            name2: "",
            GPF: ["", "", ...arr],
            petData,
            columns: [health2],
            data: [],
            pageData: [],
            storage,
        };
    },
    mounted() {
        try {
            let { GPF, name } = JSON.parse(
                b64DecodeUnicode(this.$route.query.search)
            );
            this.GPF = GPF;
            this.name = name;
            this.handleCalc(false);
        } catch (err) {}
    },
    computed: {
        getPetData() {
            return this.petData[this.platform].data;
        },
    },
    methods: {
        handleChange(v) {
            const [i, j] = v.split(".");
            const { name, GPF } = this.getPetData[i].arr[j];
            this.GPF = [this.GPF[0], ...GPF];
            this.name = name;
        },
        handleChangePlatform(v) {
            setStorage("platform", v);
        },
        async handleCalc(isStorage = true) {
            const GPF = [...this.GPF];
            const name = this.name;
            const search = b64EncodeUnicode(JSON.stringify({ GPF, name }));
            this.$router.push({ path: "CalcPostiveHp", query: { search } });
            this.data = calcPostive(GPF);
            if (isStorage) {
                this.storage.unshift({ name, GPF });
                this.storage.length > 3 && this.storage.pop();
                setStorage("CalcPostiveHp", this.storage);
            }
            this.pageData = [...this.data.slice((this.pageIndex - 1) * 15, 15)];
        },
        handleRecodeCalc(i) {
            const { GPF, name } = this.storage[i];
            this.name = name;
            this.GPF = [...GPF];
            this.handleCalc(false);
        },
        handleChangePage(v) {
            this.pageIndex = v;
            this.pageData = [...this.data.slice((v - 1) * 15, 15 * v)];
        },
    },
    components: {
        CalcInput,
    },
};
</script>
