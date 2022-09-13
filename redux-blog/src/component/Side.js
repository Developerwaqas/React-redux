import { Slider } from 'rsuite';
const side =()=> (
  <div>
   <div className="col-lg-12 mt-4">
                        <label for="exampleEmail" className="">
                          Coin Digital Sales Payout
                        </label>
                        <div
                          style={{
                            width: "80%",
                            marginLeft: 10,
                            marginTop: 10,
                          }}
                        >
                          <Slider
                            defaultValue={80}
                            step={10}
                            graduated
                            progress
                            min={10}
                            max={100}
                            renderMark={(mark) => {
                              if (
                                [
                                  10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
                                ].includes(mark)
                              ) {
                                return <span>{mark}%</span>;
                              }
                              return null;
                            }}
                          />
                        </div>
                      </div>
    <br />
  </div>
);
export default side;